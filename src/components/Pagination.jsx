const Pagination = ({ pageNo, handleNext, handlePrev }) => {
  return (
    <div className='mt-6 p-4 bg-gray-800 rounded-lg text-white flex justify-center items-center gap-6'>
      <button
        onClick={handlePrev}
        className='px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50'
        disabled={pageNo === 1}
      >
        Prev
      </button>
      <div className='text-lg font-semibold'>Page {pageNo}</div>
      <button
        onClick={handleNext}
        className='px-4 py-2 bg-blue-600 rounded hover:bg-blue-700'
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
