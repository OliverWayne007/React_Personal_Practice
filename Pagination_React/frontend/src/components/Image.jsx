const Image = ( { url } ) => {
    return (
        <div className="imageContainer">
            <img src={url} />
        </div>
    )
}

export default Image;