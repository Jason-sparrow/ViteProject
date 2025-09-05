const About = () => {
  return (
    <>
    <div>About</div>
    <div className="grid grid-cols-3 gap-4">
    {[...Array(9)].map((_, i) => (
  <div key={i} className="p-4 bg-green-500 text-white text-center rounded">
    {i + 1}
  </div>
))}

    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 bg-sky-100">
      <div className="col-span-2 bg-amber-500">A</div>
      <div className="col-span-2 bg-purple-50"> B</div>
      <div className="bg-orange-300 col-span-2">C</div>
    </div>

    </div>
    </>
  )
}

export default About