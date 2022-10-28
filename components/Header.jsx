import { ConnectButton } from "web3uikit";

export default function Header() {
    return (
    <nav className="m-0 p-2">
        <ul class="flex flex-row justify-between items-center font-semibold">
            <li className="flex items-center">
                <img src="/earth.png" className="w-10 h-10 rounded-full m-1 bg-white"/>
                <span className="text-white mx-3 text-2xl">COLLEGENCE</span>
            </li>
            <li><ConnectButton moralisAuth={false} /></li>
        </ul>
    </nav>
    );
}