import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSide = () => {
    return (
        <div>
            <div className='flex flex-col gap-3'>
                <h2 className="text-xl font-semibold mb-5">Login With</h2>
                <button className='btn border-blue-400 text-blue-500'><FaGoogle />Login With Google</button>
                <button className='btn border-blue-400 text-blue-500'><FaGithub />Login With GitHub</button>
            </div>
        </div>
    );
};

export default RightSide;