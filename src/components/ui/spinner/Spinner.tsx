import './Spinner.css';

function Spinner() {
    return (
        <>
            <div className="spinner-container flex justify-center items-center h-screen">
                <div className="loading-spinner">
                </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
    )
}

export default Spinner