import { useState } from 'react';
import FileSelector from './components/file-selector';
import SelectedFilesList from './components/selected-files-list';
import ResultFilesList from './components/result-files-list';
import Header from './components/header';

function App() {
    const [files, setFiles] = useState([]);
    const [resultFiles, setResultFiles] = useState([]);
    const [converting, setConverting] = useState(false);

    const selectFiles = (e) => {
        setResultFiles([]);
        const mFiles = e.target.files;
        setFiles(
            [...mFiles].filter(
                (file) => file.size < 5000000 && file.type === 'image/png'
            )
        );
    };

    const handleRemove = (index) => {
        const mFiles = files.filter((file, idx) => index !== idx);
        setFiles(mFiles);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConverting(true);
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        fetch('https://alter-backend-production.up.railway.app', {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.text())
            .then((jsonres) => {
                const images = JSON.parse(jsonres);
                setResultFiles(images);
                setConverting(false);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className="p-14 h-full">
            <div className="w-[528px] h-full mx-auto flex flex-col">
                <FileSelector
                    onSelect={selectFiles}
                    onSubmit={handleSubmit}
                    converting={converting}
                />
                {files.length !== 0 && (
                    <div className="h-full border rounded-md mt-4 flex flex-col overflow-hidden ">
                        {resultFiles.length === 0 && (
                            <Header converting={converting} />
                        )}

                        {resultFiles.length === 0 ? (
                            <SelectedFilesList
                                files={files}
                                handleRemove={handleRemove}
                            />
                        ) : (
                            <ResultFilesList files={resultFiles} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
