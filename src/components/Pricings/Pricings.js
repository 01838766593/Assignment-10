import React from 'react';
import Footer from '../Footer/Footer';

const Pricings = () => {

    return (
        <div>
            <h2 className="pt-5 mt-5 text-primary">pricing of Test</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Test Name</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="table-secondary">
                        <th scope="row">1</th>
                        <td>Alburin Test</td>
                        <td>1000 BDT</td>

                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">2</th>
                        <td>Conjugated Billiburin Test</td>
                        <td>800 BDT</td>

                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">3</th>
                        <td>Choletorol Test</td>
                        <td>600 BDT</td>

                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">4</th>
                        <td>Hematology Test</td>
                        <td>2000 BDT</td>

                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">5</th>
                        <td>Hormone Test</td>
                        <td>900BDT</td>

                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">6</th>
                        <td>Immunology Test</td>
                        <td>1200 BDT</td>

                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">7</th>
                        <td>Genetic Test</td>
                        <td>1300 BDT</td>

                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">8</th>
                        <td>Hepatitis Markers Test</td>
                        <td>2000 BDT</td>

                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default Pricings;