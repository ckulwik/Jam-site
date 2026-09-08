import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import type { Product } from '../consts';

import './productInfoModal.css';

const ProductInfoModal = ({ product, open, setOpen }: { product: Product; open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                role="dialog"
                fullWidth
                maxWidth="md"
            >
                <DialogTitle id="dialog-title">
                    {product.title}
                </DialogTitle>
                <DialogContent>
                    <div className='side-by-side'>
                        <img src={product.img} alt={product.title} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                        <div className='right-side'>
                            <DialogContentText id="dialog-description">
                                {product.description}
                            </DialogContentText>
                            <DialogContentText>
                                Price: ${product.price.toFixed(2)}
                            </DialogContentText>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                    <Button variant='contained' onClick={handleClose}>Add To Cart</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default ProductInfoModal;