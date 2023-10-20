export default function LoaderDetails() {
    return (
      <>
          <div className="container mx-auto px-4 max-w-screen-xl flex flex-wrap grid xl:grid-cols-2  sm:grid-cols-2 xs:grid-cols-1 gap-4">

              <div>
                <div className="title-load-detail bg-loader"></div>

                {/* <div className="content-title-load-detail bg-loader"></div> */}
                <div className="text-load-detail bg-loader"></div>
                <div className="date-load-detail bg-loader"></div>
                <div className="text-load-detail bg-loader"></div>
                <div className="date-load-detail bg-loader"></div>

              </div>
              <div>
                <div className="img-load-detail bg-loader"></div>
                <div className="date-load-detail bg-loader"></div>
                <div className="text-load-detail bg-loader"></div>
                <div className="text-load-detail bg-loader"></div>
                
              </div>
             
          </div>
      </>
    )
}