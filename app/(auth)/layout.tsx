


export default function authLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      
      <div className="flex-center min-h-screen w-full bg-primary-50
      bg-dotted-pattern bg-cover bg-fixed bg-center">
       
   
        {children}
     
      
      </div>
      
    )
  }