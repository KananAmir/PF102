import { useEffect, useState } from "react"
import { endpoints } from "../../../constants"
import { getData, deleteDataById, editDataById } from "../../../services/api"
import { Container } from "@mui/material";
import { Button, message, Popconfirm, Table, Tooltip, Modal } from 'antd';


const Books = () => {

    const [books, setBooks] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [editedBook, setEditedBook] = useState({
        title: "",
        price: 0,
        description: ""
    })


    //edit modal

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const handleDelete = async (id) => {
        try {
            const response = await deleteDataById(endpoints.BOOKS, id)

            console.log(response);

            setBooks(books.filter(book => book.id !== id))

        } catch (error) {
            console.log(error);

        }
    }

    const confirm = (id) => {
        console.log(id);
        handleDelete(id)
        message.success('Click on Yes');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    const handleEditBook = async(e)=>{
        e.preventDefault()
        console.log(editedBook.id);
        try {
            const response = await editDataById(endpoints.BOOKS, editedBook.id, editedBook)
            console.log(response);
            // if(response.status === 201){
            //     setBooks([...books, editedBook])
            // }

            getData(endpoints.BOOKS).then((data) => {
                setBooks(data)
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setIsLoading(false)
            })
       
        } catch (error) {
            console.log(error);
            
        }

        
    }


    useEffect(() => {
        getData(endpoints.BOOKS).then((data) => {
            setBooks(data)
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])


    if (isLoading) {
        return (<>
            <Container>
                <div style={{ fontSize: "3rem" }}>
                    <p>LOADING...</p>
                </div>
            </Container>
        </>)
    }

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const columns = [
        {
            title: 'Book Title',
            dataIndex: 'title',
            showSorterTooltip: {
                target: 'full-header',
            },
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
            // onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
            // sortDirections: ['descend', "ascend"],
        },
        {
            title: 'Price',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: "Stock",
            dataIndex: "stock"
        },
        {
            title: "Description",
            dataIndex: "description",
            render: (value, record) => {
                return (
                    <Tooltip title={value}>
                        <span>{`${value.slice(0, 50)}...`}</span>
                    </Tooltip>
                )
            }
        },
        {
            title: "Genre",
            dataIndex: "genre"
        },
        {
            title: "Photo",
            dataIndex: "coverImageURL",
            render: (value, record) => {
                console.log("value", value);
                console.log("record", record);

                return (<img src={value} width={50} />)

            }
        },
        {
            title: "ACTIONS",
            dataIndex: null,
            render: (_, record) => {

                return (
                    <div className="flex gap-3">
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => confirm(record.id)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>delete</Button>
                        </Popconfirm>

                        <Button className="!border-green-500 !text-green-500" onClick={()=>{
                            showModal()
                            setEditedBook({...record})
                        }}>edit</Button>
                    </div>)

            }
        },
    ];

    return (



        <div className="py-5">

            <Container >
                <h1>Books</h1>
                <Table
                    columns={columns}
                    dataSource={books}
                    onChange={onChange}
                    showSorterTooltip={{
                        target: 'sorter-icon',
                    }}
                />


                <Modal title="Edit Book" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <form className="flex flex-col gap-3 items-center" onSubmit={handleEditBook}>
                        <div>
                        <input type="text" name="title" id="title" placeholder="title" value={editedBook.title} onChange={(e)=>setEditedBook({...editedBook, title: e.target.value})}/>
                        </div>
                        <div>
                        <input type="text" name="price" id="price" placeholder="price" value={editedBook.price} onChange={(e)=>setEditedBook({...editedBook, price: e.target.value})}/>
                        </div>
                       <div>
                       <input type="text" name="description" id="description" placeholder="description" value={editedBook .description} onChange={(e)=>setEditedBook({...editedBook, description: e.target.value})}/>
                       </div>
                        <button type="submit">Submit</button>
                    </form>
                </Modal>


            </Container>
        </div>
    )
}

export default Books