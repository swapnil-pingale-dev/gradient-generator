export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center py-5 dark:bg-neutral-900 dark:text-neutral-50">
      © {currentYear} Gradient Generator — Made with ❤️ by Swapnil
    </div>
  );
}
