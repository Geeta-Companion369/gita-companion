import Types "../types/media";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Time "mo:core/Time";

/// Domain logic for gallery image metadata and donation QR code management.
module {

  // ─── Gallery ───────────────────────────────────────────────────────────────

  /// Register a new gallery image after a successful object-storage upload.
  /// Returns the auto-incremented local ID assigned to this image.
  public func registerImage(
    images    : List.List<Types.GalleryImageMeta>,
    nextId    : { var value : Nat },
    uploader  : Principal,
    input     : Types.GalleryImageInput,
  ) : Nat {
    let id = nextId.value;
    nextId.value += 1;
    let meta : Types.GalleryImageMeta = {
      id;
      assetId    = input.assetId;
      uploader;
      category   = input.category;
      caption    = input.caption;
      isApproved = true;
      uploadedAt = Time.now();
    };
    images.add(meta);
    id
  };

  /// Return all gallery images (approved and pending), newest first.
  public func listAllImages(
    images : List.List<Types.GalleryImageMeta>,
  ) : [Types.GalleryImageMeta] {
    images.toArray().reverse()
  };

  /// Return only approved gallery images for public display, newest first.
  public func listApprovedImages(
    images : List.List<Types.GalleryImageMeta>,
  ) : [Types.GalleryImageMeta] {
    images.filter(func(img) { img.isApproved }).toArray().reverse()
  };

  /// Return all images uploaded by a specific principal.
  public func listImagesByUploader(
    images   : List.List<Types.GalleryImageMeta>,
    uploader : Principal,
  ) : [Types.GalleryImageMeta] {
    images.filter(func(img) { Principal.equal(img.uploader, uploader) }).toArray().reverse()
  };

  /// Set approved flag on an image by local ID. Returns false if not found.
  public func setImageApproval(
    images   : List.List<Types.GalleryImageMeta>,
    id       : Nat,
    approved : Bool,
  ) : Bool {
    var found = false;
    images.mapInPlace(func(img) {
      if (img.id == id) {
        found := true;
        { img with isApproved = approved }
      } else {
        img
      }
    });
    found
  };

  // ─── Donation QR Code ─────────────────────────────────────────────────────

  /// Persist new donation info (QR asset ID + bank details).
  public func setDonationInfo(
    donationInfo : { var value : ?Types.DonationInfo },
    input        : Types.DonationInfoInput,
  ) : () {
    donationInfo.value := ?{
      qrCodeAssetId = input.qrCodeAssetId;
      accountName   = input.accountName;
      accountNumber = input.accountNumber;
      ifscCode      = input.ifscCode;
      bankName      = input.bankName;
      upiId         = input.upiId;
      updatedAt     = Time.now();
    };
  };

  /// Retrieve current donation info. Returns null if not yet configured.
  public func getDonationInfo(
    donationInfo : { var value : ?Types.DonationInfo },
  ) : ?Types.DonationInfo {
    donationInfo.value
  };
};
