import React from 'react'

const Quote = ({ children, generateQuote, currentQuoteIndex }) => {
    return (
        <div className='bg-slate-400 rounded-lg shadow-lg mt-[2rem] py-[2rem]'>
            <ul className='text-center'>
                {generateQuote.length > 0 && (
                    <li key={currentQuoteIndex}>
                        <p className='text-xl font-[500]'>
                            "{generateQuote[currentQuoteIndex].text}"
                        </p>
                        <p className='text-xl font-[500]'>
                            -{generateQuote[currentQuoteIndex].author}
                        </p>
                    </li>
                )}
            </ul>
            <div className='flex justify-center mt-[2rem]'>
                {children}
            </div>
        </div>
    )
}

export default Quote