function NavBar() {
    return ( 
        <nav className="flex p-4 justify-between shadow-md shadow-accent items-center align-middle text-white mb-6">
            <div className="text-xl">
                <h1>travelMe</h1>
            </div>
            <div className="right text-sm font-thin">
                <p>@wjbetech</p>
            </div>
        </nav>
    );
}

export default NavBar;