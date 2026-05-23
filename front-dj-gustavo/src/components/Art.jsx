import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ArticuloCompleto() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const wpApiUrl = `http://gdl-blog.local/wp-json/wp/v2/posts/${id}`;

        fetch(wpApiUrl)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setCargando(false);
            })
            .catch(err => console.error("Error al traer el artículo:", err));
    }, [id]);

    if (cargando) return <div className="text-center text-cyan-400 mt-20 text-2xl font-black animate-pulse">Cargando artículo...</div>;
    
    if (!post) return <div className="text-white text-center mt-20">Artículo no encontrado.</div>;

    return (
        <div className="p-8 max-w-4xl mx-auto text-white mt-10">
            
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