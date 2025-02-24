import React from "react"

const CertificateDisplay = ({ certificates }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CertificateDisplay
  