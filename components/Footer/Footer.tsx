import React from 'react'
import ContainerProject from '../Container/Container'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <ContainerProject >
            <div>
                <div className="copyright">
                    &copy; {currentYear} <a href="https://saytyarat.com" className="text-blue-500 hover:underline">Saytyarat.com</a>
                </div>
            </div>

        </ContainerProject>
    )
}

export default Footer