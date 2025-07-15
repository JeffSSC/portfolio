interface PhotoProps {
  imageUrl: string;
  linkPexels: string;
  altText?: string;
}

const Photo: React.FC<PhotoProps> = ({ imageUrl, altText, linkPexels }) => {
  return (
    <div className="photo-container">
      <a href={linkPexels} target="_blank" rel="noopener noreferrer">
        <img 
        src={imageUrl} 
        alt={altText || 'Photo'} 
        className="photo-image" 
      />
      </a>
    </div>
  );
}

export default Photo;