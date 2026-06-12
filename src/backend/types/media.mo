module {
  // ─── Gallery Image Upload Metadata ────────────────────────────────────────
  /// Stored after a successful object-storage upload.
  /// assetId is the ID returned by the object-storage extension.
  public type GalleryImageMeta = {
    id          : Nat;          // auto-incremented local ID
    assetId     : Text;         // object-storage asset ID / key
    uploader    : Principal;    // principal who uploaded
    category    : Text;         // e.g. "Krishna", "Temple", "Festival"
    caption     : Text;         // optional display caption
    isApproved  : Bool;         // admin can approve/hide
    uploadedAt  : Int;          // Time.now() nanoseconds
  };

  /// Input shape accepted from the frontend when registering a new gallery upload.
  public type GalleryImageInput = {
    assetId    : Text;
    category   : Text;
    caption    : Text;
  };

  // ─── Donation QR Code ─────────────────────────────────────────────────────
  /// Admin-set donation QR code and bank details.
  public type DonationInfo = {
    qrCodeAssetId : Text;         // object-storage asset ID for the QR image
    accountName   : Text;
    accountNumber : Text;
    ifscCode      : Text;
    bankName      : Text;
    upiId         : Text;
    updatedAt     : Int;
  };

  /// Input shape for setting/updating donation info.
  public type DonationInfoInput = {
    qrCodeAssetId : Text;
    accountName   : Text;
    accountNumber : Text;
    ifscCode      : Text;
    bankName      : Text;
    upiId         : Text;
  };
};
