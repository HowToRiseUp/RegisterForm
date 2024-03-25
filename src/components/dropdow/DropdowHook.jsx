import useClickOutSide from "../../hooks/useClickOutSide";

const DropdowHook = () => {
    const { show, nodeRef, setShow } = useClickOutSide()
    return (
        <div className="relative" ref={nodeRef}>
            <div className="p-4 rounded transition-all bg-white flex justify-between items-center" onClick={() => {
                setShow(!show)
            }}>
                <div className="text-sm text-[#999999]">Select your job</div>
            </div>
            <div className={`${show ? '' : 'opacity-0 invisible'} absolute w-full rounded overflow-hidden`}>
                <div className="p-4  transition-all bg-white border-t border-gray-300 ">Front End</div>
                <div className="p-4  transition-all bg-white border-t border-gray-300 ">Back End</div>
                <div className="p-4  transition-all bg-white border-t border-gray-300 ">Full Stack</div>
            </div>
        </div>
    );
};

export default DropdowHook;