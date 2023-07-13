import React, { useEffect } from "react";
import qrcode from "qrcode";

const QrCode = () => {
  const productPageURL = "http://localhost:3000/contact";

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCodeDataURL = await qrcode.toDataURL(productPageURL);
        // Display the QR code image in an <img> tag
        const img = document.getElementById("qrcode");
        img.src = qrCodeDataURL;
      } catch (error) {
        console.error(error);
      }
    };

    generateQRCode();
  }, []);

//   const handleScanning = () => {
//     console.log(`Scanned QR code: ${productPageURL}`);
//     // Redirect to the product page
//     window.location.href = productPageURL;
//   };

  return (
    <div style={{border:'3px solid black', borderRadius:'10px'}}>
    
      <img id="qrcode" alt="Product QR Code" />
   
    </div>
  );
};

export default QrCode;

// import React, { useEffect } from 'react';
// import qrcode from 'qrcode';

// const ProductPage = () => {
//   const productPageURL = 'http://localhost:3000/contact';

//   useEffect(() => {
//     const generateQRCode = async () => {
//       try {
//         const qrCodeDataURL = await qrcode.toDataURL(productPageURL);
//         // Display the QR code image in an <img> tag
//         const img = document.getElementById('qrcode');
//         img.src = qrCodeDataURL;
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     generateQRCode();
//   }, []);

//   const handleScanning = () => {
//     console.log(`Scanned QR code: ${productPageURL}`);
//     // Open the product page in a popup
//     window.open(productPageURL, 'ProductPagePopup', 'width=600,height=400');
//   };

//   return (
//     <div>
//       <h1>Product Page</h1>
//       <img id="qrcode" alt="Product QR Code" />
//       <button onClick={handleScanning}>Simulate Scanning</button>
//     </div>
//   );
// };

// export default ProductPage;
