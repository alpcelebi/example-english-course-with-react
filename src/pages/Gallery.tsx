import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/layout/SectionHeader';
import { Modal } from '../components/ui/Modal';
import { GALLERY_IMAGES } from '../data/gallery';
import { ZoomIn } from 'lucide-react';

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <Navbar />
            <main className="pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white min-h-screen">
                <Container>
                    <SectionHeader
                        badge="Gallery"
                        title="Snapshots from School"
                        description="Our happy students and educational environment."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {GALLERY_IMAGES.map((img) => (
                            <div
                                key={img.id}
                                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-100 aspect-square bg-slate-100 hover:shadow-card-hover transition-all duration-500"
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <img
                                    loading="lazy"
                                    src={`${import.meta.env.BASE_URL}${img.src.replace(/^\//, '')}`}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-6">
                                    <span className="text-white font-medium text-sm">{img.alt}</span>
                                    <ZoomIn className="text-white h-5 w-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </main>

            <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} className="bg-transparent shadow-none max-w-5xl">
                {selectedImage && (
                    <img
                        src={`${import.meta.env.BASE_URL}${selectedImage.replace(/^\//, '')}`}
                        alt="Gallery Preview"
                        className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                    />
                )}
            </Modal>

            <Footer />
        </>
    );
}
