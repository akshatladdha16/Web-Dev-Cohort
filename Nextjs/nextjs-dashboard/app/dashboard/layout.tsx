import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
    // It is a way of destructuring the props and annotating their types. like this we can directly use children instead of props.children
    //Type Annotation: The : { children: React.ReactNode } is a TypeScript type annotation. It specifies that the children prop should be of the type React.ReactNode.
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}