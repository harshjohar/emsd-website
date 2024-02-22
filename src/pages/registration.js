import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/registration.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BANK_DETAILS } from "@/data/bank";

const regColumns = [
    {
        id: "category",
        align: "center",
        label: "Category",
        // minWidth: 170,
    },
    {
        id: "IndPart",
        align: "center",
        label: "Indian Participants",
        // minWidth: 100,
    },
    {
        id: "ForPart",
        label: "Foreign Participants",
        // minWidth: 170,
        align: "center",
    },

];


function createData(
    category,
    IndPart,
    ForPart,
) {
    return { category, IndPart, ForPart };
}


const regRows = [
    createData(
        "Students (Ph.D, UG, PG)", "₹3,000", "USD 200"),
    createData("Faculty/Academiat", "₹5,000", "USD 200"),
    createData("Industry", "₹6,000", "USD 200"),
    createData("Accompany Person", "₹1,500", "USD 100"),
];



function Registration() {
    return (
        <PageLayout title={"Registration | EMSD'24"}>
            <h1 className={styles.heading}>Registration</h1>
            {/* <div className={styles.register}>
                <a
                    href="#"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <button>Register</button>
                </a>
            </div> */}
            <div className={styles.register}>
                    <a
                        href="https://forms.gle/7geEA5CVVYVK6Ujz8"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        <button>Submit your Abstract</button>
                    </a>
            </div>
            <div className={styles.section}>
                    <h2 className={styles.section_heading}>Submission of Papers</h2>
                    <p className={styles.section_details}>
                        Authors are required to submit one page abstract
                        through mail (emsdpec2024@gmail.com)
                        in the below template. Authors may
                        send full paper (after the acceptance of Abstract) for
                        inclusion in conference proceedings.<br/>
                        <strong> AWARDS FOR BEST ORAL AND POSTER PRESENTATIONS.</strong>
                    </p>
                    <ul className={styles.section_details}>
                        <li>Title: Times New Roman (Bold), 14</li>
                        <li>Text: Times New Roman, 12</li>
                        <li>Line spacing: 1.5 lines, Keywords: Max five</li>
                    </ul>
            </div>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={1}></TableCell>
                            <TableCell
                                align="center"
                                colSpan={1}
                                style={{ fontWeight: "800" }}
                            >
                                Registraion Fees Details
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            {regColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        top: 57,
                                        minWidth: column.minWidth,
                                        fontWeight: "600",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {regRows.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.name}
                                >
                                    {regColumns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.format &&
                                                    typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <h5 style={{ marginTop: "10px" }}>
                * The registration fee does not include GST or any other taxes.
            </h5>

            <div className={styles.rules}>

                <div className={styles.section}>
                    <h2 className={styles.section_heading}>Payment Details</h2>
                    <p className={styles.section_details}>
                        You can complete your registration online by using
                        the provided link, and the registration fee can be
                        conveniently paid through online methods such as
                        NEFT/IMPS to the following account:
                    </p>


                    <TableContainer sx={{ marginTop: "20px" }}>
                        <Table>
                            <TableBody>
                                {Object.keys(BANK_DETAILS).map((key, i) => {
                                    return (
                                        <TableRow key={i} hover>
                                            <TableCell>{key}</TableCell>
                                            <TableCell>
                                                {BANK_DETAILS[key]}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        </PageLayout>
    );
}

export default Registration;