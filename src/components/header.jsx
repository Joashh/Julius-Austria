import Profile from './profile.jsx';
import Quotation from './quotation.jsx';

export default function Header() {
    return (
        <>
            <div className='pb-0 flex gap-4 max-sm:flex-col'>
                <div className='w-full'>
                    <Profile />
                </div>


            </div>
        </>
    );
}