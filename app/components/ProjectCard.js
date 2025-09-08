import React from 'react'

const ProjectCard = ({
    title = "THE MARINA",
    location = "Surat, India",
    imageUrl = "ModernVilla.png",
}) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 max-w-sm mx-auto">
                {/* Header */}
                <div className="p-6 pb-4">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-wider mb-1">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm font-light tracking-wide">
                        {location}
                    </p>
                </div>

                {/* Image Container */}
                <div className="px-6 pb-6">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                        {!imageError ? (
                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                onError={handleImageError}
                            />
                        ) : (
                            // Placeholder when image fails to load
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center shadow-sm">
                                        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 text-sm">Project Image</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;