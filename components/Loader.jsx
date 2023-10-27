export default function Loader() {
    return (
        <>
            {[...Array(4)].map((_, index) => (
                <div className="col-3 col-6-md col-12-sm" key={index}>
                    <div className="card mt-30">
                        <div className="img-loader bg-loader"></div>
                        <div className="title-loader bg-loader"></div>
                        <div className="short-desc-loader bg-loader"></div>
                        <div className="desc-loader bg-loader"></div>
                        <div className="long-desc-loader bg-loader"></div>
                    </div>
                </div>
            ))}
        </>
    )
}