import MovieForm from "../movieSearch/page"

export const metadata = {
    title: 'Receita 3 e 3a',
    description: 'Generated by Next.js',
  }
    
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <div style={{ maxWidth: "600px", margin: "20px auto" }}>
                <MovieForm /> 
                <div>{children}</div>
            </div>
        </body>
      </html>
    )
  }