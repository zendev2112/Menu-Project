const Categories = ({categories}) => {
  return (
    <div className="btn-container">
        {categories.map((category)=>{
            return <button type="button" className="btn">
                {category}
            </button>
        })}
    </div>
  )
}
export default Categories