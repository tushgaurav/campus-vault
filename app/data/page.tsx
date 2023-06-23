export default function Data() {
    return (
    <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">CampusVault</h2>
        <p className="text-lg text-gray-700 mb-8">Data from.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Feature 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
    </main>
    )
}