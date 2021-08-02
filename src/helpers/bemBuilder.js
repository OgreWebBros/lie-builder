const bemBuilder = (classDetails) => {
    const block = classDetails.block ? `${classDetails.block}` : '';
    const element = classDetails.element ? `__${classDetails.element}` : '';

    let allModifiedClasses = [];

    const getModifiedClasses = (item) => {
        const modifier = `--${item}`;
        const modifiedClass = `${block}${element}${modifier}`
        allModifiedClasses.push(modifiedClass);
    }

    if (classDetails.modifier) {
        classDetails.modifier.forEach(getModifiedClasses);
    }

    const modifiedClasses = classDetails.modifier ? ` ${allModifiedClasses.join(' ')}` : '';
    const combinedClassNameString = `${block}${element}${modifiedClasses && modifiedClasses}`;
    return combinedClassNameString
}

export default bemBuilder;