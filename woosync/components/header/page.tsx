import { UserButton } from "@clerk/nextjs";

export default function HeaderComp(){
    return(
        <header className="grid grid-cols-2 gap-4 bg-white">
            <div className="flex justify-start p-4 items-center"><h1 className="font-medium">wooedit.ai</h1></div>
            <div className="flex justify-end p-4 items-center"><UserButton/></div>
        </header>
    );
}