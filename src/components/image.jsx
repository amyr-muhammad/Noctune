const Image = ({file}) => {
    return (
        <>
        <img src={file} alt="" className="w-full h-auto rounded-2xl object-cover" />
        </>
    )
}

export default Image;