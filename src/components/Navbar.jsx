import { useTheme } from '../context/ThemeContext';
import Button from './Button';

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">🚀 React App</h1>
      <Button onClick={() => setDark(!dark)}>
        {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </Button>
    </nav>
  );
}
