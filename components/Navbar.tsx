import Link from "next/link"

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">campusVault</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/register">Register</Link></li>
      <li>
        <details>
          <summary>
            More
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a>About</a></li>
            <li><a>DMCA</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>  
    )
}