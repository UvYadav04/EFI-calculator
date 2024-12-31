const form1 = document.querySelector('#charge')
const point_input = document.querySelector('#point')
const line_input = document.querySelector('#line')
const surface_input = document.querySelector('#surface')
const volume_input = document.querySelector('#volume')
const form2 = document.querySelector('#form2')
const form3 = document.querySelector('#cal')
const div = document.querySelector('#type')
const body = document.querySelector('body')

const result = document.createElement('p')
const label_res = document.createElement('label')
label_res.setAttribute('for', 'result')
result.setAttribute('id', 'result')
result.setAttribute('class', 'result')
label_res.setAttribute('class', 'result')
label_res.innerText = "NET E.F.I : "

body.append(label_res)
body.append(result)
result.innerText = "0"

form1.addEventListener('submit', function (e) {

    if (point_input.checked == 0 && line_input.checked == 0 && surface_input.checked == 0 && volume_input.checked == 0) {
        e.preventDefault()
        return;
    }

    form1.addEventListener('submit', () => {
        location.reload();
    })

    const button_cal = document.createElement('button')
    button_cal.innerText = "Submit"

    // form2.remove()
    // form3.remove()
    if (point_input.checked == 1) {
        // document.body.style.backgroundColor = 'red'

        const br = document.createElement('br')
        const hr = document.createElement('hr')
        var charge_no = document.createElement('input')
        const label_no = document.createElement('label')
        // const label_no = document.createElement('button')
        label_no.innerText = "Enter no. of charges : "
        charge_no.setAttribute('type', 'number')
        // charge_no.setAttribute('class', 'charge')
        charge_no.setAttribute('id', 'noc')
        label_no.setAttribute('for', 'noc')

        // div.append(form2)
        form2.append(label_no)
        form2.append(charge_no)
        form2.append(br)


        form2.addEventListener('submit', (e) => {

            form2.addEventListener('submit', () => {
                location.reload();
            })

            for (let i = charge_no.value; i > 0; i--) {

                var input1 = document.createElement('input')
                var input2 = document.createElement('input')
                var input3 = document.createElement('input')
                var input4 = document.createElement('input')
                const label1 = document.createElement('label')
                const label2 = document.createElement('label')
                const label3 = document.createElement('label')
                const label4 = document.createElement('label')

                input1.required = true
                input2.required = true
                input3.required = true
                input4.required = true

                const br = document.createElement('br')
                const hr = document.createElement('hr')

                input1.setAttribute('type', 'number')
                input2.setAttribute('type', 'number')
                input3.setAttribute('type', 'number')
                input4.setAttribute('type', 'number')

                input1.setAttribute('class', 'input_charges')
                input2.setAttribute('class', 'input_charges')
                input3.setAttribute('class', 'input_charges')
                input4.setAttribute('class', 'input_charges')

                input2.style.width = '30px';
                input3.style.width = '30px';
                input4.style.width = '30px';

                input1.setAttribute('placeholder', 'charge in coulomb')

                input1.setAttribute('id', 'charges')
                input2.setAttribute('id', 'rx')
                input3.setAttribute('id', 'ry')
                input4.setAttribute('id', 'rz')
                label1.setAttribute('for', 'charges')
                label2.setAttribute('for', 'rx')
                label3.setAttribute('for', 'ry')
                label4.setAttribute('for', 'rz')
                label1.innerText = `Enter mag. of point charge ${i}: `
                label2.innerText = `r${i}:`
                label3.innerText = `θ${i}:`
                label4.innerText = `ϕ${i}:`

                form3.insertAdjacentElement("afterbegin", hr)
                form3.insertAdjacentElement("afterbegin", br);

                form3.insertAdjacentElement("afterbegin", input4);
                form3.insertAdjacentElement("afterbegin", label4);


                form3.insertAdjacentElement("afterbegin", input3);
                form3.insertAdjacentElement("afterbegin", label3);


                form3.insertAdjacentElement("afterbegin", input2);
                form3.insertAdjacentElement("afterbegin", label2);


                form3.insertAdjacentElement("afterbegin", input1);
                form3.insertAdjacentElement("afterbegin", label1);

                form3.insertAdjacentElement("afterbegin", br);

            }
            e.preventDefault()
        })

    }

    if (line_input.checked == 1) {
        var line_den = document.createElement('input')
        var label_line = document.createElement('label')
        var sen = document.createElement('p')
        sen.innerText = "Select the axis of line  charge : "
        sen.setAttribute('class', 'dir')
        var dirx = document.createElement('input')
        var diry = document.createElement('input')
        var dirz = document.createElement('input')

        const br = document.createElement('br')
        const hr = document.createElement('hr')

        dirx.setAttribute('class', 'dir')
        diry.setAttribute('class', 'dir')
        dirz.setAttribute('class', 'dir')

        dirx.setAttribute('value', 'x')
        diry.setAttribute('value', 'y')
        dirz.setAttribute('value', 'z')

        dirx.required = true
        diry.required = true
        dirz.required = true

        var label_dirx = document.createElement('p')
        var label_diry = document.createElement('p')
        var label_dirz = document.createElement('p')

        label_dirx.setAttribute('class', 'dir')
        label_diry.setAttribute('class', 'dir')
        label_dirz.setAttribute('class', 'dir')

        dirx.setAttribute('type', 'radio')
        label_dirx.setAttribute('for', 'dirx')
        dirx.setAttribute('id', 'dirx')
        dirx.setAttribute('name', 'dir')
        label_dirx.innerText = 'x-axis:'

        diry.setAttribute('type', 'radio')
        label_diry.setAttribute('for', 'diry')
        diry.setAttribute('id', 'diry')
        diry.setAttribute('name', 'dir')
        label_diry.innerText = 'y-axis:'

        dirz.setAttribute('type', 'radio')
        label_dirz.setAttribute('for', 'dirz')
        dirz.setAttribute('id', 'dirz')
        dirz.setAttribute('name', 'dir')
        label_dirz.innerText = 'z-axis:'


        line_den.required = true

        label_line.innerText = "Enter linear charge density : ";
        line_den.setAttribute('id', 'line_den')
        line_den.setAttribute('type', 'number')
        label_line.setAttribute('for', 'line_den')
        line_den.setAttribute('class', 'input_charges')
        line_den.setAttribute('placeholder', 'linear charge density')

        form3.append(br)
        form3.append(label_line)
        form3.append(line_den)
        // form3.append(br)
        // form3.append(br)

        form3.append(sen)
        form3.append(label_dirx)
        form3.append(dirx)
        form3.append(label_diry)
        form3.append(diry)
        form3.append(label_dirz)
        form3.append(dirz)
        form3.append(br)
        form3.append(hr)
    }

    if (surface_input.checked == 1) {
        var surface_den = document.createElement('input')
        var label_surface = document.createElement('label')
        // const br = document.createElement('br')
        surface_den.required = true

        const br = document.createElement('br')
        const hr = document.createElement('hr')

        // label_surface.innerText = "Enter surfac charge density : ";
        // surface_den.setAttribute('id', 'surface_den')
        // surface_den.setAttribute('type', 'number')
        // label_surface.setAttribute('for', 'surface_den')
        // surface_den.setAttribute('class', 'input_charges')
        // surface_den.setAttribute('placeholder', 'surface charge density')

        // form3.append(label_surface)
        // form3.append(surface_den)
        // form3.append(br)

        var par = document.createElement('p')
        par.innerText = "Select the plane of surface  charge : "
        par.setAttribute('class', 'dir')
        var dirxy = document.createElement('input')
        var diryz = document.createElement('input')
        var dirzx = document.createElement('input')

        dirxy.setAttribute('class', 'dir')
        diryz.setAttribute('class', 'dir')
        dirzx.setAttribute('class', 'dir')

        dirxy.setAttribute('value', 'xy')
        diryz.setAttribute('value', 'yz')
        dirzx.setAttribute('value', 'zx')

        dirxy.required = true
        diryz.required = true
        dirzx.required = true

        var label_dirxy = document.createElement('label')
        var label_diryz = document.createElement('label')
        var label_dirzx = document.createElement('label')

        label_dirxy.setAttribute('class', 'dir')
        label_diryz.setAttribute('class', 'dir')
        label_dirzx.setAttribute('class', 'dir')

        dirxy.setAttribute('type', 'radio')
        label_dirxy.setAttribute('for', 'dirxy')
        dirxy.setAttribute('id', 'dirxy')
        dirxy.setAttribute('name', 'dir_sur')
        label_dirxy.innerText = 'xy:'

        diryz.setAttribute('type', 'radio')
        label_diryz.setAttribute('for', 'diryz')
        diryz.setAttribute('id', 'diryz')
        diryz.setAttribute('name', 'dir_sur')
        label_diryz.innerText = 'yz:'

        dirzx.setAttribute('type', 'radio')
        label_dirzx.setAttribute('for', 'dirzx')
        dirzx.setAttribute('id', 'dirzx')
        dirzx.setAttribute('name', 'dir_sur')
        label_dirzx.innerText = 'zx:'


        // surface_den.required = true

        label_surface.innerText = "Enter surface charge density : ";
        surface_den.setAttribute('id', 'surface_den')
        surface_den.setAttribute('type', 'number')
        label_surface.setAttribute('for', 'surface_den')
        surface_den.setAttribute('class', 'input_charges')
        surface_den.setAttribute('placeholder', 'surface charge density')

        form3.append(br)
        form3.append(label_surface)
        form3.append(surface_den)

        form3.append(br)

        form3.append(par)
        form3.append(label_dirxy)
        form3.append(dirxy)
        form3.append(label_diryz)
        form3.append(diryz)
        form3.append(label_dirzx)
        form3.append(dirzx)
        form3.append(br)
        form3.append(hr)
    }

    if (volume_input.checked == 1) {
        var volume_den = document.createElement('input')
        var label_volume = document.createElement('label')
        const br = document.createElement('br')
        const hr = document.createElement('hr')
        volume_den.required = true

        label_volume.innerText = "Enter volumer charge density : ";
        volume_den.setAttribute('id', 'volume_den')
        volume_den.setAttribute('type', 'number')
        label_volume.setAttribute('for', 'volume_den')
        volume_den.setAttribute('class', 'input_charges')
        volume_den.setAttribute('placeholder', 'volumear charge density')

        var xc = document.createElement('input')
        var yc = document.createElement('input')
        var zc = document.createElement('input')
        var xc_label = document.createElement('label')
        var yc_label = document.createElement('label')
        var zc_label = document.createElement('label')
        var center = document.createElement('p')
        var radius = document.createElement('input')
        var rad_label = document.createElement('label')

        xc.setAttribute('type', 'number')
        xc.setAttribute('class', 'center')
        // xc.setAttribute('type', 'number')
        xc.setAttribute('id', 'centerx')
        xc.required = true

        yc.setAttribute('type', 'number')
        yc.setAttribute('class', 'center')
        // yc.setAttribute('type', 'number')
        yc.setAttribute('id', 'centery')
        yc.required = true

        zc.setAttribute('type', 'number')
        zc.setAttribute('class', 'center')
        // zc.setAttribute('type', 'number')
        zc.setAttribute('id', 'centerz')
        zc.required = true

        radius.setAttribute('type', 'number')
        radius.setAttribute('class', 'center')
        radius.setAttribute('id', 'radius')
        radius.required = true

        rad_label.setAttribute('for', 'radius')
        rad_label.setAttribute('class', 'label')
        rad_label.innerText = "Radius: "


        xc_label.setAttribute('for', 'centerx')
        xc_label.setAttribute('class', 'label')
        xc_label.innerText = "r: "

        yc_label.setAttribute('for', 'centery')
        yc_label.setAttribute('class', 'label')
        yc_label.innerText = "θ: "

        zc_label.setAttribute('for', 'centerz')
        zc_label.setAttribute('class', 'label')
        zc_label.innerText = "ϕ: "

        center.innerText = "Enter the centre and radius of the volume charge :"
        center.setAttribute('class', 'ref')

        form3.append(label_volume)
        form3.append(volume_den)
        form3.append(br)

        form3.append(center)
        form3.append(xc_label)
        form3.append(xc)
        form3.append(yc_label)
        form3.append(yc)
        form3.append(zc_label)
        form3.append(zc)
        form3.append(rad_label)
        form3.append(radius)

        form3.append(br)
        form3.append(hr)

    }


    var input_refx = document.createElement('input');
    var input_refy = document.createElement('input');
    var input_refz = document.createElement('input');
    var label_refx = document.createElement('label');
    var label_refy = document.createElement('label');
    var label_refz = document.createElement('label');
    const br = document.createElement('br')
    const hr = document.createElement('hr')

    input_refx.required = true
    input_refy.required = true
    input_refz.required = true

    input_refx.setAttribute('id', 'refx')
    input_refy.setAttribute('id', 'refy')
    input_refz.setAttribute('id', 'refz')

    input_refx.setAttribute('type', 'number')
    input_refy.setAttribute('type', 'number')
    input_refy.setAttribute('placeholder', 'deg')
    input_refz.setAttribute('type', 'number')

    label_refx.setAttribute('for', 'ref')
    label_refy.setAttribute('for', 'ref')
    label_refz.setAttribute('for', 'ref')

    label_refx.innerText = "r:"
    label_refy.innerText = "θ:"
    label_refz.innerText = "ϕ:"

    input_refx.style.width = '35px'
    input_refy.style.width = '35px'
    input_refz.style.width = '35px'

    const p = document.createElement('p')
    p.innerText = "Enter coordinates for the reference point "
    // p.style.fontsize = "20px"
    p.setAttribute('class', 'ref')
    form3.append(p)
    // form1.append(br)
    form3.append(br)
    form3.append(label_refx)
    form3.append(input_refx)
    form3.append(label_refy)
    form3.append(input_refy)
    form3.append(label_refz)
    form3.append(input_refz)
    form3.append(hr)

    form3.insertAdjacentElement("beforeend", button_cal)

    // var res = document.createElement('p')
    // var res_label = document.createElement('label')

    // res.setAttribute('id', 'result')
    // res_label.setAttribute('for', 'result')
    // res_label.innerText = "E.F.I = "
    // res.setAttribute('class', 'result')

    // form3.insertAdjacentElement("beforeend", br)
    // form3.insertAdjacentElement("beforeend", res)
    // form3.insertAdjacentElement("beforeend", res_label)
    e.preventDefault()
})

form3.addEventListener('submit', function (e) {
    console.log(`submit`)

    const xref = document.querySelector('#refx')
    const yref = document.querySelector('#refy')
    const zref = document.querySelector('#refz')

    let r = xref.valueAsNumber
    let theta = yref.valueAsNumber
    let phi2 = zref.valueAsNumber

    theta = theta * Math.PI / 180
    phi2 = phi2 * Math.PI / 180
    console.log(theta)
    console.log(phi2)

    let xr = r * Math.sin(theta) * Math.cos(phi2)
    let yr = r * Math.cos(theta) * Math.sin(phi2)
    let zr = r * Math.cos(theta)

    // console.log(`xr : `, xr)
    // console.log(`yr : `, yr)
    // console.log(`zr : `, zr)

    let Ex = 0
    let Ey = 0
    let Ez = 0

    let a_x;
    let a_y;
    let a_z;

    console.log('submit')
    if (point_input.checked == 1) {
        const size = document.querySelector('#noc')
        const charges = document.querySelectorAll('#charges')
        const rho_x = document.querySelectorAll('#rx')
        const theta_in = document.querySelectorAll('#ry')
        const phi_cy = document.querySelectorAll('#rz')


        let charge = []
        for (let i = 0; i < size.value; i++)
            charge.push(charges[i].valueAsNumber)

        console.log(charge)

        // console.log(typeof (ruv))
        let x = []
        for (let j = 0; j < size.value; j++) {
            let Theta_x = theta_in[j].valueAsNumber * Math.PI / 180
            let phi_x = phi_cy[j].valueAsNumber * Math.PI / 180
            console.log(Theta_x)
            x.push((rho_x[j].valueAsNumber * Math.cos(phi_x) * Math.sin(Theta_x)))
        }

        console.log(x)

        let y = []
        for (let k = 0; k < size.value; k++) {
            let Theta_y = theta_in[k].valueAsNumber * Math.PI / 180
            let phi_y = phi_cy[k].valueAsNumber * Math.PI / 180
            y.push((rho_x[k].valueAsNumber * Math.sin(Theta_y) * Math.sin(phi_y)))
        }

        // console.log(`${Math.sin(theta_in[0].valueAsNumber)}`)
        console.log(y)
        // console.log(y)

        let z = []
        for (let l = 0; l < size.value; l++) {
            let Theta_z = theta_in[l].valueAsNumber * Math.PI / 180
            z.push(rho_x[l].valueAsNumber * Math.cos(Theta_z))
        }

        console.log(z)

        // console.log(xr)

        let total = 0
        let En = 0

        for (let a = 0; a < size.value; a++) {
            let dx = (xr - x[a]) ** 2
            let dy = (yr - y[a]) ** 2
            let dz = (zr - z[a]) ** 2

            let dis = Math.sqrt(dx + dy + dz)

            console.log(dx)
            console.log(dy)
            console.log(dz)

            if (charge[a] < 0) {
                a_x = (xr - x[a]) / dis
                a_y = (yr - y[a]) / dis
                a_z = (zr - z[a]) / dis
            }

            else if (charge[a] > 0) {
                a_x = (x[a] - xr) / dis
                a_y = (y[a] - yr) / dis
                a_z = (z[a] - zr) / dis
            }

            else {
                continue;
            }

            let Es = (charge[a] / (4 * Math.PI * dis * dis * 8.85))
            // console.log(dis)
            // console.log(Es)
            Ex = Ex + Es * a_x
            Ey = Ey + Es * a_y
            Ez = Ez + Es * a_z
        }

        // console.log(Ex.toPrecision(2))
        // console.log(Ey)
        // console.log(Ez)

        // console.log(`Net EFI due to point charge = ${Ex.toPrecision(2)}ax + ${Ey.toPrecision(2)}ay + ${Ez.toPrecision(2)}az`)

        // 
        // console.log(typeof (Ldensity))
    }

    if (line_input.checked == 1) {
        const Ldensity = document.querySelector('#line_den')
        let E_line

        var L_dir = document.querySelectorAll('input[name = "dir"]')
        var dir_line;

        for (let i = 0; i < L_dir.length; i++) {
            if (L_dir[i].checked == true) {
                dir_line = L_dir[i].value
            }
        }

        switch (dir_line) {
            case ('x'):

                let rho_x = Math.sqrt(yr ** 2 + zr ** 2).toPrecision(2)

                const mac = (2 * Math.PI * 8.85 * rho_x).toPrecision(4)

                E_line = Ldensity.value / mac

                Ey = Ey + E_line * yr
                Ez = Ez + E_line * zr

                console.log(`Net EFI due to line charge : ${Ex.toPrecision(3)}ax + ${Ey.toPrecision(2)}ay + ${Ez.toPrecision(2)}az`)
                // console.log(E_line.toPrecision(5))
                break;

            case ('y'):

                let rho_y = Math.sqrt(xr ** 2 + zr ** 2).toPrecision(2)

                a_x = xr
                a_y = 0
                a_z = zr

                const mac2 = (2 * Math.PI * 8.85 * rho_y).toPrecision(4)

                E_line = Ldensity.value / mac2

                Ex = Ex + E_line * xr
                Ez = Ez + E_line * zr

                console.log(`Net EFI due to line charge : ${Ex.toPrecision(3)}ax + ${Ey.toPrecision(2)}ay + ${Ez.toPrecision(2)}az`)
                break;

            case ('z'):

                let rho_z = Math.sqrt(yr ** 2 + xr ** 2).toPrecision(2)

                a_x = xr
                a_y = yr
                a_z = 0

                const mac3 = (2 * Math.PI * 8.85 * rho_z).toPrecision(4)

                E_line = Ldensity.value / mac3

                Ex = Ex + E_line * xr
                Ey = Ey + E_line * yr

                console.log(`Net EFI due to line charge : ${Ex.toPrecision(3)}ax + ${Ey.toPrecision(2)}ay + ${Ez.toPrecision(2)}az`)
                // console.log(E_line.toPrecision(5))
                break;

        }

    }

    if (surface_input.checked == 1) {
        console.log('surface')

        const surf_den = document.querySelector('#surface_den')

        const dir_surf = document.querySelectorAll('input[name = "dir_sur"]')
        console.log(typeof (dir_surf))
        // console.log(typeof (input[id = "surface_den"]))
        let rho_s
        for (let i = 0; i < dir_surf.length; i++) {
            if (dir_surf[i].checked == 1)
                rho_s = dir_surf[i].value
        }

        console.log(rho_s)
        // console.log(typeof (surf_den))
        // console.log(surf_den.value)


        switch (rho_s) {
            case ('xy'):
                if (zr > 0) {
                    Ez = Ez + surf_den.value / (2 * 8.85)
                }

                else {
                    Ez = Ez - surf_den.value / (2 * 8.85)
                }

                console.log(`Net EFI due to surface charge : ${Ex.toPrecision(3)}ax + ${Ey.toPrecision(2)}ay + ${Ez.toPrecision(2)}az`)

                break;

            case ('yz'):
                if (xr > 0) {
                    Ex = Ex + surf_den.value / (2 * 8.85)
                }

                else {
                    Ex = Ex - surf_den.value / (2 * 8.85)
                }

                console.log(`Net EFI due to surface charge : ${Ex.toPrecision(3)}ax + ${Ey.toPrecision(2)}ay + ${Ez.toPrecision(2)}az`)

                break;

            case ('xz'):
                if (yr > 0) {
                    Ey = Ey + surf_den.value / (2 * 8.85)
                }

                else {
                    Ey = Ey - surf_den.value / (2 * 8.85)
                }

                console.log(`Net EFI due to surface charge : ${Ex.toPrecision(3)}ax + ${Ey.toPrecision(2)}ay + ${Ez.toPrecision(2)}az`)

                break;

        }

    }

    if (volume_input.checked == 1) {
        const rhov = document.querySelector('#volume_den')
        const r_xv = document.querySelector('#centerx')
        const theta_2 = document.querySelector('#centery')
        const phi_3 = document.querySelector('#centerz')
        const rc = document.querySelector('#radius')

        let theta_yv = theta_2.value * Math.PI / 180
        let phi_zv = phi_3.value * Math.PI / 180

        const xv = r_xv.value * Math.sin(theta_yv) * Math.cos(phi_zv)
        const yv = r_xv.value * Math.sin(theta_yv) * Math.sin(phi_zv)
        const zv = r_xv.value * Math.cos(theta_yv)

        // xv = rv * Math.cos(thetav)
        // yv = rv * Math.(thetav)

        let r = Math.sqrt((xr - xv) ** 2 + (yr - yv) ** 2 + (zr - zv) ** 2)

        let aax, aay, aaz, Ev

        aax = xr - xv
        aay = yr - yv
        aaz = zr - zv

        if (r >= rc) {

            Ev = (rc * rc * rc * rhov.value) / (3 * r * r * 8.85)
        }

        else {
            Ev = (rhov.value * r) / (3 * 8.85)
        }
        console.log(`EFI due to volume charge : ${Ev.toPrecision(3)}`)

        Ex = Ex + Ev * aax
        Ey = Ex + Ev * aay
        Ez = Ex + Ev * aaz
    }

    console.log(Ex)
    console.log(Ey)
    console.log(Ez)

    let phi_r = Math.atan(Ey / Ex)
    let theta_r = Math.atan((Math.sqrt(Ex ** 2 + Ey ** 2)) / Ez)

    // let ey = (Ey.toPrecision(3) * Math.cos(phi).toPrecision(3))
    let ex1 = (Ex * Math.sin(theta_r) * Math.cos(phi_r))
    console.log(ex1.toPrecision(3))
    let ex2 = (Ey * Math.sin(theta_r) * Math.sin(phi_r))
    console.log(ex2.toPrecision(3))
    let ex3 = (Ez * Math.cos(theta_r))
    console.log(ex3.toPrecision(3))

    let Ax = ex1 + ex2 + ex3
    console.log(Ax.toPrecision(3))


    let ey1 = (Ex * Math.cos(theta_r) * Math.cos(phi_r))
    let ey2 = (Ey * Math.cos(theta_r) * Math.sin(phi_r))
    let ey3 = (Ez * Math.sin(theta_r))

    let Ay = ey1 + ey2 - ey3
    console.log(Ay.toPrecision(3))

    let ez1 = Ex * Math.sin(phi_r)
    let ez2 = Ey * Math.cos(phi_r)

    let Az = ez2 - ez1
    console.log(Az)

    const calculation = document.querySelector('#result')

    calculation.innerText = `${Ax.toPrecision(3)}ar + ${Ay.toPrecision(3)}aθ + ${Az.toPrecision(3)}aϕ`

    e.preventDefault()
})