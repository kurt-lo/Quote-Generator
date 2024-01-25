import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button';
import Quote from '../components/Quote';

const GeneratingQuote = () => {

    const [generateQuote, setGenerateQuote] = useState([]);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get('https://type.fit/api/quotes');
                setGenerateQuote(response.data);
                console.log(response);
            } catch (error) {
                console.error(`Error fetching quotes ${error}`);
            }
        }

        fetchQuote();
    }, [])

    const handleGenerate = () => {
        setCurrentQuoteIndex((prevQuote) => (
            ((prevQuote + 1) % generateQuote.length)
        ))
    }

    return (
        <div className='container mx-auto mt-[3rem]'>
            <h1 className='text-slate-400 text-5xl text-center font-[700]'>
                Quote Generator
            </h1>
            <Quote
                generateQuote={generateQuote}
                currentQuoteIndex={currentQuoteIndex}
            >
                <Button
                    onClick={handleGenerate}
                >
                    Next Quote
                </Button>
            </Quote>

        </div>
    );
}

export default GeneratingQuote