import './footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <ul className="div_with_tasks">
                <li className="about_tasks_in_footer">Active tasks: ()</li>
                <li className="about_tasks_in_footer">Finished tasks: ()</li>
            </ul>
            <p className="info_about_year">Canban board by Varvara, 2023</p>
        </footer>
    )
}
