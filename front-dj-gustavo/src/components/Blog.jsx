import { useEffect, useState } from 'react';

export default function Blog() {
    const [post, setPost] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const wpApiUrl = '/wp-json/wp/v2/posts?per_page=1';

        fetch(wpApiUrl)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    // Usamos una Expresión Regular (/.../g) para cazar http:// y https:// 
                    // y limpiarlo en absolutamente todas las fotos y videos del artículo
                    const regex = /https?:\/\/gdl-blog\.local/g;
                    const postString = JSON.stringify(data[0]).replace(regex, '');
                    
                    setPost(JSON.parse(postString));
                }
                setCargando(false);
            })
            .catch(err => {
                console.error("Error al conectar con WordPress:", err);
                setCargando(false);
            });
    }, []);

    // Pantalla de carga animada
    if (cargando) {
        return (
            <div className="text-center text-cyan-400 mt-32 text-2xl font-black animate-pulse">
                Cargando el último artículo de GDL Production...
            </div>
        );
    }
    
    // Seguro anti-colapsos
    if (!post || !post.title) {
        return (
            <div className="text-white text-center mt-32 text-2xl">
                Aún no hay artículos publicados.
            </div>
        );
    }

    // Renderizado del artículo
    return (
        <div className="p-8 max-w-4xl mx-auto text-white mt-20">
            <h1 
                className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
            />
            
            <div 
                className="prose prose-invert prose-cyan max-w-none text-slate-300 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
            />
        </div>
    );
}