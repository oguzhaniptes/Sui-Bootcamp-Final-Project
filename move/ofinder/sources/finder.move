module ofinder::finder{
  use std::string::{Self, String};
  use sui::transfer;
  use sui::object::{Self, UID, ID};
  use sui::tx_context::{Self, TxContext};
  use sui::coin::{Self, Coin};
  use sui::sui::SUI;
  use sui::object_table::{Self, ObjectTable};
  use sui::event;

  const INSUFFICENT_FUNDS: u64 = 0;
  const DOES_NOT_MATCH:u64 = 1;

  const MIN_APPEAL_COST: u64 = 1;

  struct OFinder has key {
    id: UID,
    owner: address,
    appeal_count: u64,
    appeals: ObjectTable<String, LostDocumentsAppeal>,
  }

  struct LostDocumentsAppeal has key, store {
    id: UID,
    owner: address,
    name: String,
    dob: u64,
    license_no: u64,
    award: u64,
    appeal_status: bool,
  }

  struct Finder has key {
    id: UID,
    owner: address,
    contact: String,
    doc_name: String,
    doc_dob: u64,
    doc_license_no: u64,
  }

  struct FinderContact has key, store {
    id: UID,
    contact: String
  }

  struct DocumentAdded has copy, drop {
    id: ID,
    hash: String,
    award: u64,
  }

  struct MatchSuccessful has copy, drop {
    hash: String,
    award: u64,
    appeal_status: bool,
  }

  fun init(ctx: &mut TxContext){
    transfer::share_object(
      OFinder{
        id: object::new(ctx),
        owner: tx_context::sender(ctx),
        appeal_count: 0,
        appeals: object_table::new(ctx)
      }
    );
  }

  public entry fun create_appeal(
    name: vector<u8>,
    dob: u64,
    license_no: u64,
    award: u64,
    payment: Coin<SUI>,
    o_finder: &mut OFinder,
    ctx: &mut TxContext,
  ){
    let payment_value = coin::value(&payment);
    assert!(payment_value == MIN_APPEAL_COST, INSUFFICENT_FUNDS);
    transfer::public_transfer(payment, o_finder.owner);

    o_finder.appeal_count = o_finder.appeal_count + 1;

    let id = object::new(ctx);

    // TODO name+dob+licenseno hash value
    //example => oguzhan01072001999999
    let hash = x"6f67757a68616e3031303732303031393939393939";

    event::emit(
      DocumentAdded{
        id: object::uid_to_inner(&id),
        hash: string::utf8(hash),
        award: award
      }
    );

    let lost_document_appeal = LostDocumentsAppeal{
      id: id,
      owner: tx_context::sender(ctx),
      name: string::utf8(name),
      dob,
      license_no,
      award,
      appeal_status: false,
    };

    object_table::add(&mut o_finder.appeals, string::utf8(hash), lost_document_appeal)
  }


  public entry fun document_checker(o_finder: &mut OFinder, finder: &mut Finder, ctx: &mut TxContext){
    // TODO finder.doc_name + finder.doc_dob + finder.doc_license_no hash value
    let finder_hash = x"6f67757a68616e3031303732303031393939393939";

    let document = object_table::borrow_mut(&mut o_finder.appeals, string::utf8(finder_hash));

    assert!(document.name == finder.doc_name, DOES_NOT_MATCH);
    assert!(document.dob == finder.doc_dob, DOES_NOT_MATCH);
    assert!(document.license_no == finder.doc_license_no, DOES_NOT_MATCH);
    document.appeal_status = true;

    // let award_value = coin::Coin(&document.award);
    event::emit(MatchSuccessful{
      hash: string::utf8(finder_hash),
      award: document.award,
      appeal_status: document.appeal_status
    });


    let id = object::new(ctx);

    let finder_contact = FinderContact{
      id: id,
      contact: finder.contact
    };

    transfer_finder_contact(finder_contact, document.owner);
    // transfer::public_transfer(awardKAKA, finder.address);
  }

  entry fun transfer_finder_contact(contact: FinderContact, recipient: address) {
      transfer::public_transfer(contact, recipient)
  }

}