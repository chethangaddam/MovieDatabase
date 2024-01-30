function Pagination({nextClick, prevClick, currentPages}) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px',
          marginBottom: '20px',
        }}
      >
        <button
          type="button"
          onClick={() => prevClick()}
          style={{border: 'none', padding: '10px', borderRadius: '20px'}}
        >
          Prev
        </button>
        <h2>{currentPages}</h2>
        <button
          type="button"
          style={{border: 'none', padding: '10px', borderRadius: '20px'}}
          onClick={() => nextClick()}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
