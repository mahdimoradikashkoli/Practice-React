export const Header=()=>{
    return (
        <div className="flex items-center justify-center mb-6">
            <div className="w-full flex items-center justify-between rounded-lg z-10 px-2 py-1 bg-slate-600 text-white fixed top-0">
                <button onClick={()=>{
                    location.assign("/")
                }}>
                <h4>Home</h4>
                </button>
                <div className="flex gap-2">
                    <button onClick={()=>{
                        location.assign("/auth/signin")
                    }}>
                    <h4>Sign In</h4>
                    </button>
                    <button onClick={()=>{
                        location.assign("/auth/signup")
                    }}>
                    <h4>Sign Up</h4>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}