import { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

export function Layout({ children }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get("query"));
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (event.key === "Enter") {
            console.log(value)
            navigate(`/search?query=${value}`);
        }
    };

    return (
        <>
            <nav className="w-full p-4 flex justify-between items-center bg-cyan-900 h-16">
            <Link className='text-white' to="/">MediaApp</Link>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleSubmit} // Maneja el evento onKeyDown
                    className="p-4 w-80 h-10"
                    value={value}
                    placeholder="Buscar serie o película..."
                />
            </nav>
            {children}
        </>
    );
}