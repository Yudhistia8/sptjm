'use client'
import {useMemo, useState} from "react";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";

const TablePerwakilan = ({datas}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [searchFilters, setSearchFilters] = useState({
        kecamatan: "",
        kelurahan: "",
    });

    const processedData = useMemo(() => {
        return datas
            .filter((item) => {
                return (
                    (searchFilters.kecamatan == "" || item["Kecamatan"] === searchFilters.kecamatan) &&
                    (searchFilters.kelurahan == "" || item["Kelurahan"] === searchFilters.kelurahan)
                );
            })
            .map((item) => {
                return {
                    ...item,
                };
            });
    }, [datas, searchFilters]);


    const totalPages = Math.ceil(processedData.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleFilterChange = (e) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value,
        });
        setCurrentPage(1);
    };

    const currentItems = processedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i <= 10 || i === totalPages) {
                pages.push(
                    <Button
                        key={i}
                        size='sm'
                        onClick={() => handleClick(i)}
                        disabled={currentPage === i}
                    >
                        {i}
                    </Button>
                );
            } else if (i === 11) {
                pages.push(<span key="ellipsis">...</span>);
            }
        }
        return pages;
    };

    return (
        <>
            <div className='flex items-center gap-4'>
                <div className="flex items-center gap-2">
                    <Label>Max Data per Page</Label>
                    <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <Label>Kecamatan</Label>
                    <select name="kecamatan" onChange={handleFilterChange} value={searchFilters.kecamatan}>
                        <option value="">All</option>
                        {Array.from(new Set(datas.map(item => item["Kecamatan"]))).map((kecamatan, index) => (
                            <option key={index} value={kecamatan}>{kecamatan}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <Label>Kelurahan</Label>
                    <select name="kelurahan" onChange={handleFilterChange} value={searchFilters.kelurahan}>
                        <option value="">All</option>
                        {Array.from(new Set(datas.map(item => item["Kelurahan"]))).map((kelurahan, index) => (
                            <option key={index} value={kelurahan}>{kelurahan}</option>
                        ))}
                    </select>
                </div>
            </div>

            <table border="4" cellPadding="10" className='my-5'>
                <thead>
                <tr className="text-sm font-thin">
                    <th>NO</th>
                    <th>NAMA PENERIMA</th>
                    <th>NAMA DIWAKILKAN</th>
                    <th>NIK PENERIMA</th>
                    <th>NIK DIWAKILKAN</th>
                    <th>ALAMAT PENERIMA</th>
                    <th>ALAMAT DIWAKILKAN</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index} className="text-[12px]">
                        <td>{index + 1}</td>
                        <td>{item["PBP Awal"]}</td>
                        <td>{item["PBP Perwakilan"]}</td>
                        <td>{item["__EMPTY"]}</td>
                        <td>{item["__EMPTY_4"]}</td>
                        <td>{item["__EMPTY_1"]}</td>
                        <td>{item["__EMPTY_5"]}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="flex items-center gap-1">
                <Button onClick={handlePrev} size='sm' disabled={currentPage === 1}>
                    Prev
                </Button>
                {renderPagination()}
                <Button onClick={handleNext} size='sm' disabled={currentPage === totalPages}>
                    Next
                </Button>
            </div>
        </>
    )
}

export default  TablePerwakilan