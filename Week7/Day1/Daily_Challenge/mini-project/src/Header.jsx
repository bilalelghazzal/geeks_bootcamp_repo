function Header() {
  return (
    <header class="my-6 p-4 flex justify-end items-center">
      <nav>
        <ul class="flex space-x-6 mt-2 justify-end">
          <li><a href="#home" class="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="#features" class="text-gray-700 hover:text-blue-600">Features</a></li>
          <li><a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;