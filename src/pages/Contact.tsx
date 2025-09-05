const Contact = () => {
  return (
    <>
    <div className="bg-green-200 m-8 grid grid-flow-col gap-4 p-5"> 
        <button className="transition duration-500 ease-in-out 
                       bg-green-300 hover:bg-green-600 transform 
                       hover:-translate-y-1 hover:scale-110 
                       rounded-lg p-4 border border-green-900">
            Hover me
        </button>
        <button className="transition-opacity duration-500 ease-in-out 
                       bg-green-300 hover:opacity-75 transform 
                       hover:-translate-y-1 hover:scale-110 
                       rounded-lg p-4 border border-green-900">
            Hover me
        </button>
        <button className="transition-none duration-500 ease-in-out 
                       bg-green-300 hover:bg-green-600 transform 
                       hover:-translate-y-1 hover:scale-110 
                       rounded-lg p-4 border border-green-900">
            Hover me
        </button>
        <button className="transition-colors duration-500 ease-in-out 
                       bg-green-300 hover:bg-yellow-600 transform 
                       hover:scale-110 rounded-lg p-4 border 
                       border-green-900 hover:border-black">
            Hover me
        </button>
        <button className="transition-transform">
          TEST
        </button>
    </div> 

    </>
  )
}

export default Contact