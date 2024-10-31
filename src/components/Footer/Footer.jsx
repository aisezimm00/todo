const Footer = ({status, setStatus}) => {
    return (
        <div className="footer">

            <button className={
                status === 'all'
                ? 'footer-btn footer-btn-active'
                : 'footer-btn'
            }
            onClick={()=>{
                setStatus('all')
            }}
            >all</button>
            <button className={
                status === 'active'
                ? 'footer-btn footer-btn-active'
                : 'footer-btn'
            }
             onClick={()=>{
                setStatus('active')
            }}
            >active</button>
            <button className={
                status === 'completed'
                ? 'footer-btn footer-btn-active'
                : 'footer-btn'
            }
             onClick={()=>{
                setStatus('completed')
            }}
            >completed</button>
            <button className={
                status === 'important'
                ? 'footer-btn footer-btn-active'
                : 'footer-btn'
            }
             onClick={()=>{
                setStatus('important')
            }}
            >important</button>
            <button className={
                status === 'deleted'
                ? 'footer-btn footer-btn-active'
                : 'footer-btn'
            }
             onClick={()=>{
                setStatus('deleted')
            }}
            >deleted</button>

        </div>
    );
}

export default Footer;

