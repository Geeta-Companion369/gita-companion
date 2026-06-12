import Types "../types/media";
import MediaLib "../lib/media";
import List "mo:core/List";

/// Public API surface for gallery image uploads and donation QR code management.
/// State slices are injected by main.mo — no business logic lives here.
mixin (
  galleryImages  : List.List<Types.GalleryImageMeta>,
  nextImageId    : { var value : Nat },
  donationInfo   : { var value : ?Types.DonationInfo },
) {

  // ─── Gallery ───────────────────────────────────────────────────────────────

  /// Register an uploaded image's metadata after a successful object-storage upload.
  /// The caller must supply the assetId returned by the object-storage extension.
  /// Returns the local image ID assigned by the canister.
  public shared ({ caller }) func uploadGalleryImage(
    input : Types.GalleryImageInput,
  ) : async Nat {
    MediaLib.registerImage(galleryImages, nextImageId, caller, input)
  };

  /// Return all approved gallery images visible to all users.
  public query func getGalleryUploads() : async [Types.GalleryImageMeta] {
    MediaLib.listApprovedImages(galleryImages)
  };

  /// Return all gallery images including unapproved — controller-only.
  public shared ({ caller }) func adminListAllGalleryImages() : async [Types.GalleryImageMeta] {
    if (not caller.isController()) {
      return []
    };
    MediaLib.listAllImages(galleryImages)
  };

  /// Approve or hide a gallery image by local ID — controller-only.
  public shared ({ caller }) func setGalleryImageApproval(
    id       : Nat,
    approved : Bool,
  ) : async Bool {
    if (not caller.isController()) {
      return false
    };
    MediaLib.setImageApproval(galleryImages, id, approved)
  };

  // ─── Donation QR Code ─────────────────────────────────────────────────────

  /// Set or update the donation QR code asset ID and bank details — controller-only.
  public shared ({ caller }) func setDonationInfo(
    input : Types.DonationInfoInput,
  ) : async Bool {
    if (not caller.isController()) {
      return false
    };
    MediaLib.setDonationInfo(donationInfo, input);
    true
  };

  /// Return current donation info (QR code asset ID + bank details) — public query.
  public query func getDonationInfo() : async ?Types.DonationInfo {
    MediaLib.getDonationInfo(donationInfo)
  };

};
