export const setLoged = (payload) => (
    {
        type: 'SET_LOGED',
        payload,
    }
);
export const setListMovements = (payload) => (
    {
        type: 'SET_MOVEMENTS',
        payload,
    }
);
export const setListAddressees = (payload) => (
    {
        type: 'SET_ADDRESSESSEES',
        payload,
    }
);
export const setShowModal = (payload) => (
    {
        type: 'SET_MODAL',
        payload,
    }
);
export const setDeleteAddressee = (payload) => (
    {
        type: 'DELETE_ADDRESSEE',
        payload,
    }
);
export const filterAddressee = (payload) => (
    {
        type: 'FILTER_ADDRESSESSEES',
        payload,
    }
);
export const filterMovements= (payload) => (
    {
        type: 'FILTER_MOVEMENTS',
        payload,
    }
);
export const setCopyMov = (payload) => (
    {
        type: 'SET_COPYMOV',
        payload,
    }
);
export const setCopyAdd = (payload) => (
    {
        type: 'SET_COPYADD',
        payload,
    }
);

