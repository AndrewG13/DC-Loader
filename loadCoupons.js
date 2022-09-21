function loadCoupons(passes) {
    // get all unclipped coupons
    let coupons = document.getElementsByClassName('available-to-clip');
    
    // clip all the available coupons found
    for (let c = 0; c < coupons.length; c++) {
        coupons[c].click();
        console.log("C");
    }

    // recursively invoke the function (will not work if done once, oddly enough)
    if (passes > 0) {
        loadCoupons(passes - 1);
    }

    return;
}

// eight is a magic number
loadCoupons(8);
